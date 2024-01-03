var grade = "C";
var result;

switch (grade) {
    case "A":
        result = "A (Excellent) 90% abou";
        break;

    case "B":
        result = "B (Good) 70% abou";
        break;

    case "C":
        result = "C (Average) 50% abou";
        break;

    case "D":
        result = "D (Below than average) 35% abou";
        break;

    case "E":
        result = "F (Fail) Less than 35%";
        break;

    default:
        result = "No Grade";

}

console.log(result);