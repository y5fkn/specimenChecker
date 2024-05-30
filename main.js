// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  // Inserts output of previous function into newStrand array to give a dna strand array
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // Output specimen number and its dna strand
  const pAequorFactory = (specimenNum, dna) => {
    originalDNA = JSON.parse(JSON.stringify(dna));
    const newSpecimen = {
      specimenNum: specimenNum,
      dna: dna,
      mutate() {
        newSpecimen.dna = mockUpStrand();
        return newSpecimen.dna
      },
      compareDNA() {
        let numValuesEqual = 0;
        for(i = 0; i < originalDNA.length; i++){
          if(originalDNA[i] === newSpecimen.dna[i]){
            numValuesEqual += 1;
          }
        }
        const percentVal = numValuesEqual / 15 * 100;
        return `\nThe original specimen and the mutated specimen have ${percentVal.toFixed(2)}% DNA in common. \n\nValues in common: ${numValuesEqual}\n`
      },
      willLikelySurvive() {
        let studies = [];
        let cIter = 0;
        let gIter = 0;
        for(i = 0; i < newSpecimen.dna.length; i++){
          if(newSpecimen.dna[i] === 'C'){
            cIter += 1;
          } else if(newSpecimen.dna[i] === 'G'){
            gIter += 1;
          }
        }
        const surviveChance = (cIter + gIter) / 15 * 100;
        if(surviveChance >= 60){
          return true;
        } else return false;
      }
    }
    return newSpecimen;
  };
  
  let pAequorStudies = [];
  let counter = 1;
  
   while(pAequorStudies.length < 30) {
    let specimenTest = pAequorFactory(counter, mockUpStrand());
    if(specimenTest.willLikelySurvive()) {
      pAequorStudies.push(specimenTest)
    }
    counter += 1; 
   }
  
  
  /*
  const make30copies = () => {
    studies = [];
    for(i=0; i < 30;i++){
      if(pAequorFactory.willLikelySurvive === true){
        console.log("+1")
      }
    }
  }
  */
  
  
  
  let pAequor = pAequorFactory(1, mockUpStrand());
  console.log(pAequor);
  pAequor.mutate();
  console.log(pAequor)
  console.log(pAequor.compareDNA());
  console.log(pAequor.willLikelySurvive());
  console.log(pAequorStudies)
  
  
  
  /*
  const pAequorFactory = (specimenNum, dna) => {
   const originalDNA = JSON.parse(JSON.stringify(dna));
    let objProperties = {
      specimenNum: specimenNum,
      dna: dna, 
      mutate() {
        objProperties.dna = mockUpStrand();
        return objProperties.dna;
      },
      compareDNA() {
        numOfMatches = 0;
        for(i=0; i < originalDNA.length; i++) {
          if(originalDNA[i] === objectProperties.dna[i]) {
            numOfMatches += 1; 
          }
        }
        return 'error'
      }
    };
      return objProperties
  }
  */
  
  
  
  
  
  
  
  
  