export default function Map() {
    return (
        <div style={{ position: 'relative', overflow: 'hidden', display: 'block' }} className="map">
            <a
                href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 0 }}
            >
                Москва
            </a>
            <a
                href="https://yandex.ru/maps/213/moscow/house/prospekt_mira_102s12/Z04YcARnT0AHQFtvfXRxcHhlZA==/?ll=37.638006%2C55.801338&utm_medium=mapframe&utm_source=maps&z=17.33"
                style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 14 }}
            >
                Проспект Мира, 102с12 — Яндекс Карты
            </a>
            <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.638006%2C55.801338&mode=whatshere&whatshere%5Bpoint%5D=37.637661%2C55.801435&whatshere%5Bzoom%5D=17&z=17.33"
                width="560"
                height="400"
                frameBorder="0"
                allowFullScreen={true}
                style={{ position: 'relative' }}
                title="Yandex Map"
            ></iframe>
        </div>
    )
}
