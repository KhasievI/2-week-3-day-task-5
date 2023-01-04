let drone = {
    items: [
        {
            flightAltitude: 0,
        },
        {
            gun:
            {
                ammunitionName: 'Бомбы',
                ammunitionCount: 0,
            }
        },
        {
            invisibleMode: false
        },
        { 
            colorDrone: 'black' },
        {
            condition: 100
        },
    ],
    // сброс боеприпаса(атака)
    ammunitionDump: function () {
        if (this.items[1].flightAltitude <= 0) {
            console.log('Смэрт, Дрон уничтожен');
            this.items[4].condition = 0
        } else if (this.items[1].gun.ammunitionCount <= 0) {
            console.log('Атака невозможна, боеприпасы отсутствуют...')
        } else {
            console.log('Booom ... Цель поражена, противник уничтожен');
            this.items[1].gun.ammunitionCount -= 1
        }
    },
    // взлет
    takeoff: function () {
        if (this.items[1].flightAltitude >= 500) {
            console.log('Дрон находится уже в воздушном пространстве...')
        } else if (this.items[1].flightAltitude <= 0) {
            this.items[1].flightAltitude = 500;
            console.log('Высота 500м взлет совершен успешно');
        }
    },
    // высота полета
    gainAltitude: function () {
        if (this.items[1].flightAltitude <= 0) {
            console.log('Высота 500м взлет совершен успешно');
            this.items[1].flightAltitude += 500;
        } else if (this.items[1].flightAltitude >= 500) {
            console.log('Высота набрана успешно');
            this.items[1].flightAltitude += 500;
        }
    },
    // посадка дрона
    landing: function () {
        if (this.items[1].flightAltitude <= 0) {
            console.log('Дрон не находится в воздушом пространстве');
        } else {
            this.items[1].flightAltitude = 0;
            console.log('Посадка совершена успешно...');
        }
    },
    // снизить высоту полета
    lowerFlight: function () {
        if (this.items[1].flightAltitude <= 0) {
            console.log('Дрон не находится в воздушом пространстве');
        } else {
            this.items[1].flightAltitude -= 500;
            console.log('Высота снижена на 500 метров!');
        }
    },
    // режим инвиз
    enableInvis: function () {
        console.log('Дрон переключен в режим невидимости!');
        this.items[2].invisibleMode = true
    },
    // выключить режим инвиз
    disableInvis: function () {
        console.log('Режим невидимости отключен!');
        this.items[2].invisibleMode = false
    },
    // режим самоуничтожения
    destruction: function () {
        console.log('slawa sssr...');
        this.items[4].condition = 0;
    },
    getStatus: function () {
         
            console.log(`Набранная высота: ${this.items[0].flightAltitude},
             ${this.items[1].gun.ammunitionName}: ${this.items[1].gun.ammunitionCount},
             Инвиз мод: ${this.items[2].invisibleMode},
             Цвет дрона: ${this.items[3].colorDrone},
             Сосотояние дрона: ${this.items[4].condition}`);
        
    },
}