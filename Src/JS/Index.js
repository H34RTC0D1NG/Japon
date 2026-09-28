    const tripBtns = document.querySelectorAll('.trip-toggle .btn');
    const fechaVuelta = document.getElementById('fechaVuelta');
    tripBtns.forEach(btn => {
        btn.addEventListener('click', () => {
        tripBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const isIda = btn.dataset.trip === 'ida';
        fechaVuelta.disabled = isIda;
        fechaVuelta.value = isIda ? '' : fechaVuelta.value;
        fechaVuelta.closest('.form-group').style.opacity = isIda ? .45 : 1;
        });
    
    });

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('fechaIda').setAttribute('min', today);
    fechaVuelta.setAttribute('min', today);

    const form = document.getElementById('flightForm');
    const confirmBox = document.getElementById('confirmBox');
    const confirmText = document.getElementById('confirmText');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const origen = document.getElementById('origen').selectedOptions[0].text;
        const destino = document.getElementById('destino').selectedOptions[0].text;
        const fechaIda = document.getElementById('fechaIda').value || 'fecha por definir';
        const adultos = document.getElementById('adultos').value;
        const ninos = document.getElementById('ninos').value;
        const clase = document.getElementById('clase').value;

        confirmText.textContent = `${origen} → ${destino} · salida ${fechaIda} · ${adultos} adulto(s), ${ninos} niño(s) · ${clase}. Reserva Exitosa`;
        confirmBox.classList.add('show');
        confirmBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    });