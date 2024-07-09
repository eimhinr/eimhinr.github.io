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
### BEBEK
### Draper 
### Detailing examples 

## B+R Architects • Architectural Technologist • *08/2010 - 11/2012*
### Waitrose Dorking
![Portfolio/BandR/B+R Dorking Detail.png](Portfolio/BandR/B+R Dorking Detail.png)

![Portfolio/BandR/B+R Dorking Elevation.png](Portfolio/BandR/B+R Dorking Elevation.png)

![Portfolio/BandR/B+R Dorking Elevation3.png](Portfolio/BandR/B+R Dorking Elevation3.png)

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

end of page

<script>
    document.addEventListener('DOMContentLoaded', function() {
        var headers = document.querySelectorAll('h2, h3');
        
        headers.forEach(function(header) {
            header.classList.add('collapsible');
            header.innerHTML = '&#x00D7; ' + header.innerHTML; // Initialize with open state

            header.addEventListener('click', function() {
                var isExpanded = header.innerHTML.startsWith('&#x00D7;');
                header.innerHTML = isExpanded
                    ? '&#x00D7; ' + header.innerHTML.substring(2); // closed state
                    : '&#x002B; ' + header.innerHTML.substring(2) // open state

                var nextElement = header.nextElementSibling;
                while (nextElement && !nextElement.matches('h2, h3')) {
                    nextElement.style.display = nextElement.style.display === 'none' ? 'block' : 'none';
                    nextElement = nextElement.nextElementSibling;
                }
            });
        });
    });
</script>