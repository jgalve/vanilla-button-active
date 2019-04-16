//add active button class      

        event.srcElement.classList.add('active');
        
        var btnTabs = document.querySelectorAll('.product-boxL2 .btn-prod');

        for (var i = 0; i < btnTabs.length; i++) {

            btnTabs[i].addEventListener("click", function() {

                var clearBtn = document.querySelectorAll('.product-boxL2 .btn-prod');

                for (var i = 0; i < clearBtn.length; i++) {
                    clearBtn[i].classList.remove('active');
                };

                this.classList.add('active');

            });

        };
