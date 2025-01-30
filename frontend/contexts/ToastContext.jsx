'use client'
import React, { createContext, useState, useContext, useCallback } from 'react'
import { X } from 'lucide-react'

const ToastContext = createContext({
    toast: () => { }
})

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([])

    const toast = useCallback((message, options = {}) => {
        const id = Date.now()
        const newToast = {
            id,
            message,
            variant: options.variant || 'default',
            duration: options.duration
        }

        setToasts(current => [...current, newToast])

        if (options.duration) {
            setTimeout(() => removeToast(id), options.duration)
        }
    }, [])

    const removeToast = useCallback((id) => {
        setToasts(current => current.filter(toast => toast.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 40,
                    width: '100%',

                }}
            >
                {toasts.map(toast => (
                    <div
                        key={toast.id}
                        style={{
                            backgroundColor: 'rgba(94, 46, 83, 0.7)',
                            height: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '2rem'

                        }}
                        
                    >
                        <div
                            style={{
                                backgroundColor: toast.variant === 'destructive' ? '#ff4d4f' : '#ffffff',
                                minWidth: '100%',
                                opacity: 1,
                                zIndex: 50,
                                minHeight: '500px',
                                borderRadius: '1rem',
                                display: 'flex',
                                flexDirection: 'column',

                            }}
                            className={`p-6 text-2xl text-black`}
                        >

                        <button
                            onClick={() => removeToast(toast.id)}
                            className='m-6 mb-14 cursor-pointer bg-transparent text-black self-end'
                        >
                            <X size={40} />
                        </button>

                            {toast.message}

                        </div>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    )
}

export function useToast() {
    const context = useContext(ToastContext)
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider')
    }
    return context
}
