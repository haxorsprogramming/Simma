function HomePage(req, res){
    let dr = { 
        judul: "Simma - Realtime Online Voting Apps", 
    }
    res.render("home", dr);
}

module.exports = {HomePage}