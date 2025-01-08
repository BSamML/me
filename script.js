
// document.querySelectorAll('#em').forEach(item => {
//     item.addEventListener('click', event => {
//     // Ocultar todos los divs
//         document.querySelectorAll('.content').forEach(div => {
//             div.classList.remove('active');
//         });
//         // Mostrar el div correspondiente
//         const targetId = event.target.getAttribute('data-target');
//         document.getElementById(targetId).classList.add('active');
//     });
// });

document.querySelectorAll('#em').forEach(
    item => { item.addEventListener('click', event => { 
        // Ocultar todos los divs 
        document.querySelectorAll('.content').forEach(div => { 
            div.classList.remove('active'); 
        }); 

        document.querySelectorAll('.t').forEach(div => { 
            div.classList.remove('act'); 
        }); 

        // Mostrar el div correspondiente 
        const targetId = event.target.getAttribute('data-target'); 
        document.getElementById(targetId).classList.add('active'); 

       event.target.classList.add('act');
       
    }); 
});

document.getElementById('download').addEventListener('click', () => { 
    const link = document.createElement('a'); 
    link.href = 'sam.pdf';  
    link.download = 'sam.pdf'; 
    link.click(); 
});

