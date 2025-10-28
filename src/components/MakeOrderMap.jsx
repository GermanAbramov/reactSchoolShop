export default function MakeOrderMap() {
    return (
        <div style={{ position: "relative", overflow: "hidden" }} className="order-map">
            <a
                href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                style={{
                    color: "#eee",
                    fontSize: 12,
                    position: "absolute",
                    top: 0,
                }}
            >
                Москва
            </a>
            <a
                href="https://yandex.ru/maps/213/moscow/?ll=37.621894%2C55.749812&utm_medium=mapframe&utm_source=maps&z=10.6"
                style={{
                    color: "#eee",
                    fontSize: 12,
                    position: "absolute",
                    top: 14,
                }}
            >
                Москва — Яндекс Карты
            </a>
            <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.621894%2C55.749812&z=10.6"
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                title="Yandex Map Moscow"
                style={{ position: "relative" }}
            />
        </div>
    )
}
