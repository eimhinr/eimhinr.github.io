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
> Watkins Gray International LLP is a distinguished architecture and design firm dedicated to enhancing lives through innovative and sustainable building solutions. Specializing in sectors such as education, healthcare, residential, commercial, and defense, their expertise spans diverse project types. Committed to the art and science of building, Watkins Gray International LLP combines creativity with technical precision to deliver transformative spaces that meet the evolving needs of clients.
### Seven Kings Redbridge

![WGI Image](assets/WGI/WGI-b13.png)

![WGI Image](assets/WGI/WGI-b14.png)

![WGI Image](assets/WGI/WGI-SevenKingsPartPlan.jpg)

### Housing Audits 
![WGI Image](assets/WGI/WGI-Audit1.jpg)

![WGI Image](assets/WGI/WGI-Audit2.jpg)

![WGI Image](assets/WGI/WGI-AuditNavis.JPG)

![WGI Image](assets/WGI/WGI-4.png)

### Bromley South Central Detailing
![WGI Image](assets/WGI/WGI-BSC-plan1.jpg)

![WGI Image](assets/WGI/WGI-BSC-plan-iso1.jpg)

![WGI Image](assets/WGI/WGI-6.png)

![WGI Image](assets/WGI/WGI-BSC-details2.jpg)

![WGI Image](assets/WGI/WGI-BSC-Detail1.jpg)

![WGI Image](assets/WGI/WGI-RoofDetail.jpg)

### GOSH Int. Private Patients Wing
![WGI Image](assets/WGI/WGI-IPP-SitePhoto.JPG)

![WGI Image](assets/WGI/WGI-IPP-002.jpg)

![WGI Image](assets/WGI/WGI-IPP-006.jpg)

### Other Projects

#### Office Rapid Prototype, Leeds
![WGI Image](assets/WGI/WGI-2.png)

#### Residential units in tower and bar building, London
![WGI Image](assets/WGI/WGI-OtherHohusing.JPG)

## 1508 London • Architectural Technologist • *11/2012 - 02/2014*
> 1508 London is an esteemed design studio renowned for crafting exceptional interiors and architectural spaces. Specializing in bespoke residential, hospitality, and yacht projects, they blend timeless elegance with innovative design. Their portfolio includes iconic developments like No.1 Grosvenor Square and the Mandarin Oriental Residences. With a tailored approach and a dedication to excellence, 1508 London transforms client visions into luxurious, functional realities.

### Bebek
This project in Istambul overlooking the Bebek inspired insluded a full rebuild of the roof structure to create a 2nd floor for this stunning view. many tecnhicial chalanges included 36m of continious, electronic curtains. 
![assets/1508/1508London Ofoe Bebek.jpg](assets/1508/1508London Ofoe Bebek.jpg)
![assets/1508/1508London Bebek.jpg](assets/1508/1508London Bebek.jpg)

### Beverly
This project was a home in dubai, which no stone was unturned to achieve the vision of the team.
![assets/1508/1508 Beverly 52.png](assets/1508/1508 Beverly 52.png)
![assets/1508/1508 Beverly 54.png](assets/1508/1508 Beverly 54.png)
![assets/1508/1508 Beverly 55.png](assets/1508/1508 Beverly 55.png)
### Detailing examples 
Out technical philosophy in 1508 was that if you can touch it, you should draw it. We deliveded the ultimate finish quality by drawing every touch point, detail and corner at a 1:1, 1:2 or 1:5 scale. 
![assets/1508/1508 London Envelope.jpg](assets/1508/1508 London Envelope.jpg)
![assets/1508/1508 London Master Dressing Plan.png](assets/1508/1508 London Master Dressing Plan.png)
![assets/1508/1508 Kitchen ![WGI Image](Portfolio/WGI/WGI - 2.png)

## B+R Architects • Architectural Technologist • *08/2010 - 11/2012*
> B+R Architects excels in delivering top-tier architectural solutions, emphasizing innovation, sustainability, and functionality. With expertise in Building Information Modeling (BIM) and a diverse portfolio, they cater to sectors including commercial, retail, and mission-critical facilities. Their commitment to design excellence is evident in projects like Google HQ and Waitrose John Lewis. At B+R Architects, creativity meets technology to transform spaces and exceed client expectations.
### Waitrose Dorking
![assets/BandR/B+R Dorking Detail.png](assets/BandR/B+R Dorking Detail.png)

![assets/BandR/B+R Dorking Elevation.png](assets/BandR/B+R Dorking Elevation.png)

![assets/BandR/B+R Dorking Elevation3.jpg](assets/BandR/B+R Dorking Elevation3.jpg)

### JLP Leeds
![assets/BandR/Portfolio Master layout draft 038.jpg](assets/BandR/Portfolio Master layout draft 038.jpg)

![assets/BandR/Image 12.jpg](assets/BandR/Image 12.jpg)

![assets/BandR/Image 10.jpg](assets/BandR/Image 10.jpg)

=============

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
