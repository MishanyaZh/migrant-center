import React from "react";
const services = [
  { id: 1, label: "Подача на карту побиту по роботі" },
  { id: 2, label: "Подача на карту побиту для возз’єднання з сім’єю" },
  { id: 3, label: "Подача на карту сталого побиту" },
  { id: 4, label: "Подача на карту резидента" },
  { id: 5, label: "Подача на громадянство" },
  {
    id: 6,
    label: "Присяжні переклади з будь-якої мови, a також медичні переклади",
  },
  { id: 7, label: "Супровід як перекладача в будь-яких установах" },
  { id: 8, label: "Шлюб на території Польщі без довідок із консульства" },
  { id: 9, label: "Відкриття фірми" },
  { id: 10, label: "Написання бізнес-плану" },
  { id: 11, label: "Організація зустрічей, конференцій, семінарів" },
  { id: 12, label: "Усі види довіреностей" },
  { id: 13, label: "Апостиль на документи" },
  { id: 14, label: "Усі види скарг, апеляцій, заяв" },
  { id: 15, label: "Заміна та перевірка водійських прав" },
  { id: 16, label: "Оформлення КОД 95, чіп-картки водія" },
  { id: 17, label: "Дозволи на роботу для візи" },
  { id: 18, label: "Заповнення будь-яких анкет для соціального житла" },
  { id: 19, label: "Оформлення 800+, 300+" },
  { id: 20, label: "Оформлення Profil Zaufany" },
  { id: 21, label: "Розрахунок PIT для приватних осіб і фірм" },
  {
    id: 22,
    label: "Організація зустрічей, конференцій, семінарів, майстер-класів ",
  },
];

const Services = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Наші Послуги:</h2>

      <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center bg-theme-background-2 shadow-md py-1 px-2 md:p-3 rounded-md"
          >
            <p>{service.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
