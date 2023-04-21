# Capstone: Volume Vile
## This is a fake online horror-themed bookstore featuring some of my art!
## This website shows a bit of what I have learned during my capstone.
## It contains 5 pages, bootstrap css cards, javascript, a table,forms with requirements and flexbox properties.

## Img pages go here:
C:\Users\Student\LearnToCode\Capstone\volume_vile\images\Webpage
### **Home Page:**(C:\Users\Student\LearnToCode\Capstone\volume_vile\index.html)
<img src="">
### **User Registration:** (C:\Users\Student\LearnToCode\Capstone\volume_vile\user_registration.html)

### **User Login:** C:\Users\Student\LearnToCode\Capstone\volume_vile\user_login.html
### **Products:** C:\Users\Student\LearnToCode\Capstone\volume_vile\products.html
### **Checkout:** (C:\Users\Student\LearnToCode\Capstone\volume_vile\checkout.html)


## Interesting code I implemented:

### **Nav bar animation:** 
<script type="text/javascript">
        window.addEventListener("scroll", function(){
            var header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        })
    </script>

### **Navbar semantics**
    <script>function AddTableARIA() {
            try {
                var allTables = document.querySelectorAll('table');
                for (var i = 0; i < allTables.length; i++) {
                    allTables[i].setAttribute('role', 'table');
                }
                var allCaptions = document.querySelectorAll('caption');
                for (var i = 0; i < allCaptions.length; i++) {
                    allCaptions[i].setAttribute('role', 'caption');
                }
                var allRowGroups = document.querySelectorAll('thead, tbody, tfoot');
                for (var i = 0; i < allRowGroups.length; i++) {
                    allRowGroups[i].setAttribute('role', 'rowgroup');
                }
                var allRows = document.querySelectorAll('tr');
                for (var i = 0; i < allRows.length; i++) {
                    allRows[i].setAttribute('role', 'row');
                }
                var allCells = document.querySelectorAll('td');
                for (var i = 0; i < allCells.length; i++) {
                    allCells[i].setAttribute('role', 'cell');
                }
                var allHeaders = document.querySelectorAll('th');
                for (var i = 0; i < allHeaders.length; i++) {
                    allHeaders[i].setAttribute('role', 'columnheader');
                }
                // this accounts for scoped row headers
                var allRowHeaders = document.querySelectorAll('th[scope=row]');
                for (var i = 0; i < allRowHeaders.length; i++) {
                    allRowHeaders[i].setAttribute('role', 'rowheader');
                }
            } catch (e) {
                console.log("AddTableARIA(): " + e);
            }
        }

        AddTableARIA();</script>


## **Links & Resources used:**

### https://www.freeformatter.com/usa-state-list-html-select.html

### https://secure.booksamillion.com/ncom/order?id=8817461004426

### https://fontawesome.com/kits

### https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

### https://freefrontend.com/css-text-glitch-effects/
- Joshua Ward-https://codepen.io/joshuaward/pen/RgOxKd 