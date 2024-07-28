const date = new Date()

exports.getDataAtual =() => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}`
}