let name1 = "Adam"
let name2 = "Sarah"
let name3 = "Michael"
if (name1.length === name2.length && name1.length ===name3.length)
 {
  console.log ("All three names are the same length.")
}
else if (name1.length === name2.length) {
  console.log ("Name1 and Name 2 are the same length.")
}

else if (name1.length === name3.length) {
    console.log ("Name1 and Name 3 are the same length.")
}

else if (name2.length === name3.length) {
    console.log ("Name2 and Name 3 are the same length.")
}

else if (name1.length > name2.length && name1.length > name3.length) {
    console.log(name1 + "is the longest name.")
}

else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(name2 + "is the longest name.")
}
else if (name3.length > name2.length && name3.length > name1.length) {
    console.log(name3 + "is the longest name.")
}