interface iMacbookPro {
    useUSBCPort(): string;
}

interface iHeadSet {
    useUSBPort(): string;
}

class MacbookPro implements iMacbookPro {
    useUSBCPort(): string {
        return 'Using The USB-C Port!';
    }
}

class Headset implements iHeadSet {
    useUSBPort() {
        return 'Using USB Port!';
    }
}

class USBToUSBCAdapter implements iMacbookPro {

    device: iHeadSet;

    constructor(device: iHeadSet) {
        this.device = device;
    }

    useUSBCPort() {
        console.log('Converting to USB type C...');
        this.device.useUSBPort();
        return 'Using the USB tyoe C adapter...';
    }
}

const adapter = new USBToUSBCAdapter(new Headset());
console.log(adapter.useUSBCPort());

export{};