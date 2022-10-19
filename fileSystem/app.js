import * as fs from 'node:fs';

// Create
const Create = () => {
    fs.writeFile('./employees.json', '[{ "name": "Employee 18 Name", "salary": 2500 }]', 'utf8', (err) => {
        if (err) throw err;
        console.log('Veriler başarıyla eklendi.');
    });
}

// Read
const Read = () => {
    fs.readFile('./employees.json', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}

// Update
const Update = () => {
    fs.readFile('./employees.json', 'utf8', (err, data) => {
        if (err) throw err;
        let arr = JSON.parse(data);
        arr.push({ name: "Employee 4 Name", salary: 28000 });

        fs.writeFile('employees.json', JSON.stringify(arr), 'utf8', (err) => {
            if (err) throw err;
            console.log("Dosya başarıyla güncellendi.");
        });
    });
};

// Delete

const Delete = () => {
    fs.unlink('./employees.json', (err) => {
        if (err) throw err;
        console.log('employees.json was deleted');
      });
}

Create();
Read();
// Update();
// Delete();