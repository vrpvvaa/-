let buttonLog = document.getElementById("log_button");
        buttonLog.addEventListener("click", showModalL);
        function showModalL(e) {
            e.preventDefault();
            let modal = document.getElementById("modalLog");
            modal.style.top = "0";
        }

        let buttonClose = document.getElementById("close_modal");
        buttonClose.addEventListener("click", closeModalL);
        function closeModalL(e) {
            e.preventDefault();
            let modal = document.getElementById("modalLog");
            modal.style.top = "-110%";
        }