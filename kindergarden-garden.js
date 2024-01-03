//
// This is only a SKELETON file for the 'Kindergarten Garden' exercise.
// It's been provided as a convenience to get you started writing code faster.
//

const DEFAULT_STUDENTS = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
];

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    // todo: implement
    this.diagram = diagram;


    this.students = studentCount.sort()

  }

  plants(student) {
    // todo: implement

    // 1. Create a variable that will hold the student index in the array. 
    // Assign it to 'indexOf' the student in the this.students array
    const studentIndex = this.students.indexOf(student);
    
    // 2. Create a variable to hold the students plants and assign it to []
    const studentsPlants= [];


    const plantRows = this.diagram.split('\n');
    // const plants =  'VRCGVVRVCGGCCGVRGCVCGCGV\nVRCCCGCRRGVCGCRVVCVGCGCV'
    // 3. For row 1 ( this.rows[0]), we need to slice the array and pull out 2 plants at the "students plant index". 
    //"students plant index = studentIndex * number of plants(2)"
    for (let i =0; i <2; i++){
      const start = studentIndex *2;
      const plantRow = plantRows[i];
      for(let o = start; 0 < start + 2; o++){
        const plantCode = plantRow[o];
        const plant = PLANT_CODES[plantCode];
        plants.push(plant)
      }
    }
    

    

    // We need to append these plants to the students plants array

    // 4. For row 2 (this.rows[1]), we need to slice the array and pull out 2 plants at the "students plant index"
    //"students plant index" = studentIndex * number of plants (2)
    // We need to append these plants to the students plants array

    

    // 5. Loop over the student plants and change the value frok the code to the plant name
    // G --> grass





    return studentsPlants;

    // 6. return the students plants;
  }
}
