const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
console.log(teachers)
let nomeTolto 
let nomeMesso
for (let i = 0 ; i < teachers.length; i++){
  nomeTolto = teachers.pop()
  nomeMesso = teachers.splice(i,0,nomeTolto)
}
 console.log(teachers)
// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
let longNames = []
for (let i = 0 ; i < teachers.length; i++){
  teachers[i]
  if (teachers[i].length >= 5){
    longNames.push(teachers[i])
   

  }
  
}

console.log(longNames)


// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(5,1)
console.log(teachers)