
        let lightbox = GLightbox({
            selector: 'a[data-glightbox]',
        });
    
        const filterButtons = document.querySelectorAll('.filter-container button');
        const items = document.querySelectorAll('.gallery .item');
    
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remover la clase 'active' de todos los botones
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Añadir la clase 'active' al botón seleccionado
                button.classList.add('active');
    
                // Obtener la categoría seleccionada
                const filter = button.getAttribute('data-filter');
    
                // Mostrar/ocultar elementos con efecto suave
                items.forEach(item => {
                    const categories = item.getAttribute('data-category').split(' ');
                    if (filter === 'all' || categories.includes(filter)) {
                        item.classList.add('show');
                    } else {
                        item.classList.remove('show');
                    }
                });
    
                // Actualizar Glightbox con las imágenes filtradas
                updateLightbox();
            });
        });
    
        // Mostrar todos los elementos al cargar la página
        window.onload = function() {
            items.forEach(item => item.classList.add('show'));
            updateLightbox(); // Inicializar el lightbox cuando todos los elementos se muestran
        }
    
        // Función para reinicializar GLightbox solo con las imágenes visibles
        function updateLightbox() {
            // Destruir el lightbox existente
            lightbox.destroy();
    
            // Crear una nueva instancia solo con los elementos visibles
            lightbox = GLightbox({
                selector: '.item.show a[data-glightbox]', // Selecciona solo los que están visibles
            });
        }
    