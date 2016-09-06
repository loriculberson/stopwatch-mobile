var formatTime = require('minutes-seconds-milliseconds');
var React = require('react-native');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight
} = React;

var StopWatch = React.createClass({ 
  getInitialState: function() {
    return {
      timeElapsed: null
    }
  },
  render: function(){
    return <View style={styles.container}> 
      <View style={styles.header}> 
        <View style={styles.timerWrapper}>  
          <Text style={styles.timer}>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>

        <View style={styles.buttonWrapper}> 
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer]}> 
        <Text>
          Lap list
        </Text>
      </View>
  </View>
  },
  startStopButton: function(){
    return <TouchableHighlight 
      underlayColor='gray'
      onPress={this.handleStartPress}
      style={[styles.button, styles.startButton]}
      >

      <Text>
        Start
      </Text>
    </TouchableHighlight>
  },
  lapButton: function(){
    return <View style={styles.button}>
      <Text>
        Lap
      </Text>
    </View>
  },
  handleStartPress: function() {
    var startTime = new Date();

    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime 
      });
    }, 30)

  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1, //Fill the entire screen
    alignItems: 'stretch'
  },
  header: { //Yellow
    flex: 1
  },
  footer: { //Blue
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00cc00'
  }
});



AppRegistry.registerComponent('stopwatch', () => StopWatch);