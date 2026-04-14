
export const TopBar = () => {
    return (
        <>
            <div className="top-bar">
                <div className="container">
                    <a href="/">
                        <img src="/logo.png" alt="Logo" className="logo" />
                    </a>

                    <div className="top-left">
                        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#A0153E" viewBox="0 0 16 16" style={{ marginRight: "8px" }}>
            <path d="M3.654 1.328a.678.678 0 0 1 .737-.093l2.261 1.13c.329.165.445.571.267.88l-1.012 1.7a.678.678 0 0 0 .145.878l2.457 1.957a.678.678 0 0 0 .878-.145l1.7-1.012c.309-.179.715-.062.88.267l1.13 2.26a.678.678 0 0 1-.093.738l-1.538 1.538c-.51.51-1.317.57-1.91.144a17.568 17.568 0 0 1-6.052-6.052c-.426-.593-.366-1.4.144-1.91L3.654 1.328z"/>
          </svg>
          +359 89 763 1899
                        </span>

                        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#A0153E" viewBox="0 0 16 16" style={{ marginRight: "8px" }}>
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.586l-8 5.714-8-5.714V4zm0 2.618v5.382A2 2 0 0 0 2 14h12a2 2 0 0 0 2-2V6.618l-7.406 5.293a1 1 0 0 1-1.188 0L0 6.618z"/>
          </svg>
          info@naval-acad_cars.com
                        </span>
                    </div>

                    <div className="top-right">
                        <a href="/login">Login</a> |
                        <a href="/register">Register</a>
                    </div>
                </div>
            </div>
        </>
    )
}