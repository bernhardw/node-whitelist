# Whitelist

Whitelist object properties.

## TODO

* Support nested properties.

## Install

    npm install git:

    // TODO:
    npm install node-whitelist
    
## Usage

    var obj = {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'admin'
    };
    
    var user = whitelist(obj, ['name', 'email'];
    
    console.log(user); // { name: 'John Doe', email: 'john@example.com' }

## Credits

TJ Holowaychuk, thank you for the [inspiration](https://github.com/visionmedia/node-only).

## License

ISC