export const filterAdherentsFromSelectedDepartments = (adherents = [], departments = []) => {
    // replace departements items by numbers
    if (departments.length < 1) {
        return adherents
    }
    const newDepArray = []
    departments.map(dep => {
        newDepArray.push(dep.substring(0, 2))
    })
    const newAdherentsArray = adherents.filter(adh => newDepArray.includes(adh.departement_siege.nom_departement.substring(0, 2)))

    return newAdherentsArray
}

export const filterAdherentsFromSelectedExpertises = (adherents = [], expertises = []) => {
    // console.log("adherents", adherents)
    // console.log("expertises", expertises)
    if (expertises.length < 1) {
        return adherents
    }

    let newAdherentsArray = []

    adherents.forEach(adh => {
        if (adh.competences) {
            let find = adh.competences.find(comp => expertises.includes(comp.type))
            if (find) {
                newAdherentsArray.push(adh)
            }
        }
    })
    return newAdherentsArray
}