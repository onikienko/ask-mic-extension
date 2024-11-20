import logo from 'url:../images/icon256.png';


export const App = () => {
    return (
        <>
            <img src={logo} alt="Logo"/>
            <h1
                onClick={() => {
                    chrome.windows.create({
                        width: 500,
                        height: 500,
                        type: 'panel',
                        url: chrome.runtime.getURL('recorder/recorder.html'),
                    })
                }}
            >
                Record Mic
            </h1>
        </>
    );
};
