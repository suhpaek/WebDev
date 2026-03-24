class Device:
    def __init__(self, brand, model, price):
        self.brand = brand
        self.model = model
        self.price = price

    def turn_on(self):
        return f"{self.brand} {self.model} включается"

    def device_type(self):
        return "Это электронное устройство"

    def __str__(self):
        return f"{self.brand} {self.model}, цена: {self.price}$"


class Laptop(Device):
    def __init__(self, brand, model, price, ram, cpu):
        super().__init__(brand, model, price)
        self.ram = ram
        self.cpu = cpu

    def code(self):
        return f"{self.brand} {self.model} используется для программирования"

    def device_type(self):
        return f"Ноутбук с процессором {self.cpu} и {self.ram} GB RAM"


class Smartphone(Device):
    def __init__(self, brand, model, price, camera_mp, sim_count):
        super().__init__(brand, model, price)
        self.camera_mp = camera_mp
        self.sim_count = sim_count

    def call(self):
        return f"{self.brand} {self.model} совершает звонок"

    def device_type(self):
        return f"Смартфон с камерой {self.camera_mp} MP и {self.sim_count} SIM"


class Tablet(Device):
    def __init__(self, brand, model, price, screen_size, supports_pen):
        super().__init__(brand, model, price)
        self.screen_size = screen_size
        self.supports_pen = supports_pen

    def draw(self):
        return f"{self.brand} {self.model} используется для рисования"

    def device_type(self):
        pen_status = "поддерживает стилус" if self.supports_pen else "не поддерживает стилус"
        return f"Планшет {self.screen_size} дюймов, {pen_status}"