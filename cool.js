document.addEventListener('DOMContentLoaded', function () {
    const trains = [
        { id: 1, name: 'Express 101', seats: 50 },
        { id: 2, name: 'Local 202', seats: 100 },
    ];

    const trainListContainer = document.getElementById('train-list');

    // Function to render the train list
    function renderTrainList() {
        trainListContainer.innerHTML = ''; // Clear previous content

        trains.forEach(train => {
            const trainCard = document.createElement('div');
            trainCard.classList.add('train-card');

            const trainName = document.createElement('h3');
            trainName.textContent = train.name;

            const seatsInfo = document.createElement('p');
            seatsInfo.textContent = `Seats available: ${train.seats}`;

            trainCard.appendChild(trainName);
            trainCard.appendChild(seatsInfo);

            trainListContainer.appendChild(trainCard);
        });
    }


    renderTrainList();
});
