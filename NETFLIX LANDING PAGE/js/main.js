/*document.addEventListener('DOMContentLoaded', function() {

    const tabItems = document.querySelectorAll('.tab-item');
    const tabContentItems = document.querySelectorAll('.tab-content-item');
    function selectItem(){
        removeBorder();
        removeShow();
        this.classList.add('tab-border');
        //Grab content item from DOM
        const tabContentItem = document.querySelector(`#${this.id}-content`);
        tabContentItem.classList.add('show');
    
    }
    
    function removeBorder(){   
        tabItems.forEach(item => item.classList.remove('tab-border'));  
    }
    function removeShow(){   
        tabContentItems.forEach(item => item.classList.remove('show'));  
    }
    
    tabItems.forEach(item => item.addEventListener('click', selectItem));
        
    });*/
    document.addEventListener('DOMContentLoaded', function() {
        const tabItems = document.querySelectorAll('.tab-item');
        const tabContentItems = document.querySelectorAll('.tab-content-item');
    
        function showTabContent() {
            const targetID = this.getAttribute('data-tab');
            tabContentItems.forEach(item => item.classList.remove('show'));
            document.getElementById(targetID).classList.add('show');
    
            tabItems.forEach(item => item.classList.remove('tab-border'));
            this.classList.add('tab-border');
        }
    
        tabItems.forEach(item => item.addEventListener('mouseenter', showTabContent));  // hover instead of click
    });
    