let defferedInstallPrompt = null;
const installButton = document.getElementById('btnInstall');
installButton.addEventListener('click', installPWA);


window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
    defferedInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt) {
    defferedInstallPrompt.prompt();
    evt.srcElement.setAttribute('hidden', true);

    defferedInstallPrompt.userChoice
        .then((choice) => {
            if(choice.outcome === 'accepted') {
                console.log('PWA setup accepted', choice);
            } else {
                console.log('PWA setup rejected', choice);
            }
            defferedInstallPrompt = null;
        })
}

window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt) {
    console.log('App was installed.', evt);
}