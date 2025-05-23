
"use client";
import './globals.css'

export default function GlobalError() {
    return (
        <html>
            <body>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="txt-2xl font-bold mb-4">
                <h1>Global Error</h1>
            </h1>
            <button
            onClick={() => window.location.reload() 
            }
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >Refresh</button>
        </div>
        </body>
    </html>
    );
}