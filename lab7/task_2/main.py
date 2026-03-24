from models import Device, Laptop, Smartphone, Tablet


def main():
    device = Device("Sony", "X100", 500)
    laptop = Laptop("Lenovo", "ThinkPad X1", 1800, 16, "Intel Core i7")
    smartphone = Smartphone("Samsung", "Galaxy S24", 1200, 50, 2)
    tablet = Tablet("Apple", "iPad Air", 900, 10.9, True)

    devices = [device, laptop, smartphone, tablet]

    for item in devices:
        print(item)
        print(item.turn_on())
        print(item.device_type())
        print()

    print(laptop.code())
    print(smartphone.call())
    print(tablet.draw())


if __name__ == "__main__":
    main()