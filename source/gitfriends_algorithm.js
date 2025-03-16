/*GitFriends Profile Algorithm*/

var profiles = Array('@JacobBorgProgramming','@wave-digital-ministries','@Cartoomb','@GitFriends');
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

    if (profiles_selected_1=='@wave-digital-ministries') {
      var profileName = 'Wave Discipleship Ministries'
      var profileIcon = 'https://avatars.githubusercontent.com/u/53627732?s=200&v=4'
      var profileTagline = 'Making waves for His Kingdom.'
      document.getElementById("profileIcon_1").src = profileIcon
      document.getElementById("profileName_1").innerHTML = profileName
      document.getElementById("profileGit_1").innerHTML = profiles_selected_1
      document.getElementById("profileTagline_1").innerHTML = profileTagline
      document.getElementById("profileLink_1").href = profileDirectory+profiles_selected_1
      document.getElementById("profileLink_1").innerHTML = profiles_selected_1
    }

    if (profiles_selected_1=='@Cartoomb') {
      var profileName = 'Cartoomb'
      var profileIcon = 'https://avatars.githubusercontent.com/u/136763548?s=200&v=4'
      var profileTagline = 'Digging up unheard stories'
      document.getElementById("profileIcon_1").src = profileIcon
      document.getElementById("profileName_1").innerHTML = profileName
      document.getElementById("profileGit_1").innerHTML = profiles_selected_1
      document.getElementById("profileTagline_1").innerHTML = profileTagline
      document.getElementById("profileLink_1").href = profileDirectory+profiles_selected_1
      document.getElementById("profileLink_1").innerHTML = profiles_selected_1
    }

    if (profiles_selected_1=='@GitFriends') {
      var profileName = 'GitFriends'
      var profileIcon = './profiles/@GitFriends/GitFriends.png'
      var profileTagline = '<h3>Git friends through coding!</h3>'
      document.getElementById("profileIcon_1").src = profileIcon
      document.getElementById("profileName_1").innerHTML = profileName
      document.getElementById("profileGit_1").innerHTML = profiles_selected_1
      document.getElementById("profileTagline_1").innerHTML = profileTagline
      document.getElementById("profileLink_1").href = profileDirectory+profiles_selected_1
      document.getElementById("profileLink_1").innerHTML = profiles_selected_1
    }



}
