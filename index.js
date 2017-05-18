// COMPOSITION
// how do you build a large app?
// Building a bunch of small apps or components
// Functional
var getProfilePic = function(username) {
  return 'https://photo.fb.com/' + username;
}

var getProfileLink = function(username) {
  return 'https://www.fb.com/' + username;
}

var getAvatarInfo = function(username) {
  return {
    pic: getProfilePic(username),
    link: getProfileLink(username)
  }
};

getAvatarInfo('randyf');

// React
var ProfilePic = function() {
  return (
    <img src={'https://photo.fb.com' + this.props.username } />
  );
}


var ProfileLink = function() {
  return (
    <a href={'https://www.fb/com/' + this.props.username}>
      {this.props.username}
    </a>
  );
}

var Avatar = function() {
  return (
    <div>
      <ProfilePic
        username={this.props.username} />
      <ProfileLink
        username={this.props.username} />
    </div>
  );
}

<Avatar username='randyf' />

// Imperative vs Declarative
// Imperative (How)
var numbers = [4, 2, 3, 6];
var total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

// Declarative (What)
var numbers = [4, 2, 3, 6];
numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);

// Unidirectional Dataflow
// All you need to worry about is managing state in your application and the UI will
// update accordingly

// Explicit Mutations
// State updates are largely are done by using setState. So
// state changes are explicit and clear.

// Just JavaScript
// React api is really small. It relies on JS for most things.
// For example in angular wie use ng-repeat to create lists,
// In React we use .map

// MVC
// React is the V in MVC
// React is all about UI i.e) View
