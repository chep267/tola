import React, { ErrorInfo, useState } from 'react';

function reloadWindow() {
    localStorage.clear();
    window.location.reload();
}

function AutoReload() {
    const [timer, setTimer] = useState(100);

    React.useEffect(() => {
        const timeOut = setTimeout(() => {
            setTimer(timer - 1);
        }, 1000);

        if (timer === 0) reloadWindow();

        return function cleanup() {
            clearTimeout(timeOut);
        };
    }, [timer]);

    return <span>{timer}</span>;
}

function FallbackComponent(props: any = {}) {
    const { hasAutoReload, hasWrap = true } = props;
    const _position = hasWrap ? 'absolute' : 'relative';
    return (
        <div style={{ color: '#707070', textAlign: 'center', position: _position, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <img style={{ width: 80, paddingBottom: 40 }} src={require('../../styles/images/error.png')} alt="Gặp lỗi" />
            <h1 style={{ color: '#707070' }}>Đã xảy ra lỗi</h1>
            <h2 style={{ color: '#707070', paddingBottom: 40 }}>Bạn hãy thử chạy lại ứng dụng.</h2>
            <button
                onClick={reloadWindow}
                style={{ cursor: 'pointer !important', backgroundColor: '#5b71eb', width: 100, height: 35, color: '#FFF', borderRadius: 30 }}>
                Thử lại
            </button>
            {hasAutoReload && (
                <p style={{ paddingTop: 40 }}>
                    <span>Tự động chạy lại sau&nbsp;</span>
                    <AutoReload />
                    <span>&nbsp;giây.</span>
                </p>
            )}
        </div>
    );
}

export default class ErrorBoundary extends React.Component {
    static defaultProps = {
        Fallback: FallbackComponent,
    };

    state = { hasError: false };

    // eslint-disable-next-line react/sort-comp
    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // axios.post('https://5ba3187b8da2f20014654b79.mockapi.io/api/v1/LogError', {
        //   "Time": new Date().getTime(),
        //   "Error": error,
        //   "ErrorInfo": errorInfo
        // });
        // console.error(errorInfo);
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children, Fallback, hasAutoReload, hasWrap }: any = this.props;
        if (hasError) {
            // You can render any custom fallback UI
            return <Fallback hasAutoReload={hasAutoReload} hasWrap={hasWrap} />;
        }

        return children;
    }
}
