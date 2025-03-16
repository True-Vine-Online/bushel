function user_load(){
  /*Edit below line to update your profile's icon*/
  document.getElementById("profileIcon").src = 'https://avatars.githubusercontent.com/u/48691704?v=4'

  /*Edit below line to update your profile's name*/
  document.getElementById("profileName").innerHTML = 'Jake'

  /*Edit below line to update your profile's Git handle*/
  document.getElementById("profileGit").innerHTML = '@JacobBorgProgramming'

  /*Edit below line to update your profile's tagline*/
  document.getElementById("profileTagline").innerHTML = 'Just a chill guy screaming (Programming) into the void (Cyberspace).'

  /*Edit below line to update your profile's body content*/
  document.getElementById("profileContent").innerHTML = ''

  /*Edit the below section to update your profile's links*/
  /*DO NOT CHANGE LINKED SERVICES. THIS MAY BREAK FEATURES OR RESULT IN YOUR PROFILE NOT BEING PUBLISHED*/
  /*Service links*/
  var githubLink = ''
  var gitlabLink = ''
  var gitLink = ''
  var xLink = ''
  var instagramLink = ''

  /*Service Vars*/
  /*DO NOT EDIT LINK ICONS*/
  var githubIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-github.svg'
  var gitlabIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-gitlab.svg'
  var gitIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-git.svg'
  var xIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-x.svg'
  var instagramIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-instagram.svg'

  /*Edit the below innerHTML function to update your profile's links*/
  document.getElementById("profileLinks").innerHTML = '<a href="'+githubLink+'" class="card-footer-item"> <img src="'+githubIcon+'" width="50px" alt="Social Button"> </a>'
    /*<a href="'+[REPLACE WITH SERVICE VAR]+'" class="card-footer-item"> <img src="'+[REPLACE WITH SERVICE ICON]+'" width="50px" alt="Social Button"> </a>*/



  /*Below line will be updated by admin staff to reflect profile creation/update time*/
  document.getElementById("profileTime").innerHTML = '5:22 PM - 15 Mar 2025'

}
