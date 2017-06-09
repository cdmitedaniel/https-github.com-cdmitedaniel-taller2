         var objetosTXT = '{"estudiantes":[ { "Name" : "Alfreds Futterkiste", "City" : "Berlin", "Country" : "Germany" }, { "Name" : "Berglunds snabbköp", "City" : "Luleå", "Country" : "Sweden" }, { "Name" : "Centro comercial Moctezuma", "City" : "México D.F.", "Country" : "Mexico" }, { "Name" : "Ernst Handel", "City" : "Graz", "Country" : "Austria" }, { "Name" : "FISSA Fabrica Inter. Salchichas S.A.", "City" : "Madrid", "Country" : "Spain" }, { "Name" : "Galería del gastrónomo", "City" : "Barcelona", "Country" : "Spain" }, { "Name" : "Island Trading", "City" : "Cowes", "Country" : "UK" }, { "Name" : "Königlich Essen", "City" : "Brandenburg", "Country" : "Germany" }, { "Name" : "Laughing Bacchus Wine Cellars", "City" : "Vancouver", "Country" : "Canada" }, { "Name" : "Magazzini Alimentari Riuniti", "City" : "Bergamo", "Country" : "Italy" }, { "Name" : "North/South", "City" : "London", "Country" : "UK" }, { "Name" : "Paris spécialités", "City" : "Paris", "Country" : "France" }, { "Name" : "Rattlesnake Canyon Grocery", "City" : "Albuquerque", "Country" : "USA" }, { "Name" : "Simons bistro", "City" : "København", "Country" : "Denmark" }, { "Name" : "The Big Cheese", "City" : "Portland", "Country" : "USA" }, { "Name" : "Vaffeljernet", "City" : "Århus", "Country" : "Denmark" }, { "Name" : "Wolski Zajazd", "City" : "Warszawa", "Country" : "Poland" } ]}' ;
        
        var objetos = JSON.parse(objetosTXT);
        
        var paises =[];
        var ciudad =[];
        
        for (var p1 = 0; p1<objetos.estudiantes.length; p1++) {
            paises[p1]=objetos.estudiantes[p1].Country; 
				}
        console.
        ciudad = eliminarIguales(paises);
        
        function eliminarIguales(paisestmp) {
            var p2, len=paisestmp.length, out=[], obj={};
            for (p2=0;p2<len;p2++){
                obj[paisestmp[p2]]=0;
            }
            
            for (p2 in obj){
                out.push(p2);
            }
            
            return out;
        }
       
        var m=0;
        var i= 0;
        
  
            var seccion = document.getElementsByTagName("section")[0];
            var tabla = document.createElement("table");
            var cabecera = document.createElement("thead");
            var cuerpo = document.createElement("tbody");
            var pie = document.createElement("tfoot");
            
            tabla.appendChild(cabecera);
            tabla.appendChild(cuerpo);
            tabla.appendChild(pie);
            seccion.appendChild(tabla);
            
            cabecera.innerHTML = "<br><tr><th>Name</th><th>City</th><th>Country</th></tr>";
            cuerpo.setAttribute("id","estudiantes"+m);
            
            for( i=0; i<objetos.estudiantes.length; i++)
            {

                    var filas = document.getElementById("estudiantes"+m);
                    var fila = document.createElement("tr");
                    var col1 = document.createElement("td");
                    var col2 = document.createElement("td");
                    var col3 = document.createElement("td");
                    
                    col1.innerHTML=objetos.estudiantes[i].Name;
                    col2.innerHTML=objetos.estudiantes[i].City;
                    col3.innerHTML=objetos.estudiantes[i].Country;
                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    filas.appendChild(fila);
                
            }
          