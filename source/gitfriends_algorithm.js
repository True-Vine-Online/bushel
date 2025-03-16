/*GitFriends Profile Algorithm*/

var profiles = Array('@JacobBorgProgramming','@example');
var profileDirectory = 'https://source.jborgarts.com/GitFriends/profiles/'


function profileRec(){
    var profiles_selected_1 = profiles[Math.floor(Math.random()*profiles.length)];
    console.log(profiles_selected_1)

    if (profiles_selected_1=='@JacobBorgProgramming') {
      var profileName = 'Jake'
      var profileIcon = 'https://avatars.githubusercontent.com/u/48691704?v=4'
      var profileTagline = 'Just a chill guy screaming (Programming) into the void (Cyberspace).'
      document.getElementById("profileIcon_1").src = profileIcon
      document.getElementById("profileName_1").innerHTML = profileName
      document.getElementById("profileGit_1").innerHTML = profiles_selected_1
      document.getElementById("profileTagline_1").innerHTML = profileTagline
      document.getElementById("profileLink_1").href = profileDirectory+profiles_selected_1
      document.getElementById("profileLink_1").innerHTML = profiles_selected_1
    }

    if (profiles_selected_1=='@example') {
      var profileName = 'Jake'
      var profileIcon = 'https://avatars.githubusercontent.com/u/48691704?v=4'
      var profileTagline = 'Just a chill guy screaming (Programming) into the void (Cyberspace).'
      document.getElementById("profileIcon_1").src = profileIcon
      document.getElementById("profileName_1").innerHTML = profileName
      document.getElementById("profileGit_1").innerHTML = profiles_selected_1
      document.getElementById("profileTagline_1").innerHTML = profileTagline
      document.getElementById("profileLink_1").href = profileDirectory+profiles_selected_1
      document.getElementById("profileLink_1").innerHTML = profiles_selected_1
    }



}
