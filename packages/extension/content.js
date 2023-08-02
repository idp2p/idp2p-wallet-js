const openWalletContainer = document.createElement("div");
openWalletContainer.classList.add("idp2p");
const openWalletButton = document.createElement("button");
openWalletButton.textContent = "Open";
openWalletButton.classList.add("idp2p-button");
//openWalletButton.hidden = true;
openWalletButton.addEventListener("click", () => {
    console.log("Button Clicked");
    chrome.runtime.sendMessage(
        { action: "Authorize" },
        function (response) {
            console.log(response);
        }
    );
});
openWalletContainer.appendChild(openWalletButton);
document.body.appendChild(openWalletContainer);
