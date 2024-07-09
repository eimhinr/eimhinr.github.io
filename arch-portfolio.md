<link href="style.css" rel="stylesheet">
# Architectural Portflio 

## Archilogic • Product Manager • *11/2022 - Present*  
### Editor 4.0
### Spacegraph Data Model 
### BOMA Calculatior
### IWMS intergrations 
### CAD Imports 
### IFC Exports 
### GLTF 

## WeWork • Product Manager, Design Technology • *07/2018 - 12/2022*
### Record Model initiative
### Design Standards
### entreprise AMAZON Manchester 
### Reality Capture
### PyRevit Tools
### Dynamo Tools 

## Pascall + Watson • Building Information Model Coordinator • *11/2016 - 07/2018*
### Campus overview
#### Unique Challanges
#### Model Overview 
### DATCT 
### Planning Set
### COBie and Uniclass 
### Dynamo 

## Watkins Gray International • Building Information Model Manager • *02/2014 - 11/2016*
### Seven Kings Redbridge 
### Abacus Belsize Primary School 
### Housing Audits 
### Bromley South Central Detailing 
### GOSH Int. Private Patients Wing



## 1508 London • Architectural Technologist • *11/2012 - 02/2014*
![Portfolio/1508/1508 Bathroom Details.png](Portfolio/1508/1508 Bathroom Details.png)
![Portfolio/1508/1508 Beverly 52.png](Portfolio/1508/1508 Beverly 52.png)
![Portfolio/1508/1508 Beverly 54.png](Portfolio/1508/1508 Beverly 54.png)
![Portfolio/1508/1508 Beverly 55.png](Portfolio/1508/1508 Beverly 55.png)
![Portfolio/1508/1508 Beverly 56.png](Portfolio/1508/1508 Beverly 56.png)
![Portfolio/1508/1508 Kitchen Plan.png](Portfolio/1508/1508 Kitchen Plan.png)
![Portfolio/1508/1508 London Envelope.jpg](Portfolio/1508/1508 London Envelope.jpg)
![Portfolio/1508/1508 London Joinery.jpg](Portfolio/1508/1508 London Joinery.jpg)
![Portfolio/1508/1508 London Master Dressing Plan.png](Portfolio/1508/1508 London Master Dressing Plan.png)
![Portfolio/1508/1508 Zink Roof Details.png](Portfolio/1508/1508 Zink Roof Details.png)
![Portfolio/1508/1508London Bebek.jpg](Portfolio/1508/1508London Bebek.jpg)
![Portfolio/1508/1508London Ofoe Bebek.jpg](Portfolio/1508/1508London Ofoe Bebek.jpg)
![Portfolio/1508/Typical Joinery Type 1.png](Portfolio/1508/Typical Joinery Type 1.png)
### BEBEK
### Draper 
### Detailing examples 

## B+R Architects • Architectural Technologist • *08/2010 - 11/2012*
### Waitrose Dorking
![Portfolio/BandR/B+R Dorking Detail.png](Portfolio/BandR/B+R Dorking Detail.png)

![Portfolio/BandR/B+R Dorking Elevation.png](Portfolio/BandR/B+R Dorking Elevation.png)

![Portfolio/BandR/B+R Dorking Elevation3.jpg](Portfolio/BandR/B+R Dorking Elevation3.jpg)

### JLP Leeds
![Portfolio/BandR/Portfolio Master layout draft 038.jpg](Portfolio/BandR/Portfolio Master layout draft 038.jpg)

![Portfolio/BandR/Image 12.jpg](Portfolio/BandR/Image 12.jpg)

![Portfolio/BandR/Image 10.jpg](Portfolio/BandR/Image 10.jpg)

=============
<!--- 
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var headers = document.querySelectorAll('h1, h2, h3');
        headers.forEach(function(header) {
            header.classList.add('collapsible');
            header.addEventListener('click', function() {
                var nextElement = header.nextElementSibling;
                while (nextElement && !nextElement.matches('h1, h2, h3')) {
                    nextElement.style.display = nextElement.style.display === 'none' ? 'block' : 'none';
                    nextElement = nextElement.nextElementSibling;
                }
            });
        });
    });
</script> 
--->

end of page, for real


<!---
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var headers = document.querySelectorAll('h2, h3');
        
        headers.forEach(function(header) {
            header.classList.add('collapsible');
            header.innerHTML = '- ' + header.innerHTML; // Initialize with open state

            header.addEventListener('click', function() {
                var isExpanded = header.innerHTML.startsWith('-');
                header.innerHTML = isExpanded
                    ? '+ ' + header.innerHTML.substring(2) // Closed state
                    : '- ' + header.innerHTML.substring(2); // Open state

                var nextElement = header.nextElementSibling;
                while (nextElement && !nextElement.matches('h2, h3')) {
                    nextElement.style.display = nextElement.style.display === 'none' ? 'block' : 'none';
                    nextElement = nextElement.nextElementSibling;
                }
            });
        });
    });
</script>
--->


<script>
    document.addEventListener('DOMContentLoaded', function() {
        var headers = document.querySelectorAll('h2, h3');
        
        headers.forEach(function(header) {
            header.classList.add('collapsible');
            header.innerHTML = '- ' + header.innerHTML; // Initialize with open state

            header.addEventListener('click', function() {
                var isExpanded = header.innerHTML.startsWith('-');
                header.innerHTML = isExpanded
                    ? '+ ' + header.innerHTML.substring(2) // Closed state
                    : '- ' + header.innerHTML.substring(2); // Open state

                var nextElement = header.nextElementSibling;
                while (nextElement && nextElement.tagName !== header.tagName) {
                    if (nextElement.matches('h2, h3, h4, h5')) {
                        nextElement.innerHTML = isExpanded ? '+ ' + nextElement.innerHTML.substring(2) : '- ' + nextElement.innerHTML.substring(2);
                    }
                    nextElement.style.display = isExpanded ? 'none' : 'block';
                    nextElement = nextElement.nextElementSibling;
                }
            });
        });
    });
</script>