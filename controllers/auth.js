export const showMessage = (req, res) => {
    res.status(200).send(`Your message is recieved from controller ${req.params.message}`)
}