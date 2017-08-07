import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { format, getTime } from 'date-fns'
import styles from './Styles/BreakStyle'

interface BreakProps {
  start: Date,
  end: Date,
  currentTime: Date,
  duration: number,
  type: object,
  title: string,
  isCurrentDay: boolean,
  isActive: boolean,
  onPress (): void
}

interface BreakState {
  imageWidth: number
}

export default class Break extends React.Component<BreakProps, BreakState> {
  constructor (props) {
    super(props)

    this.state = {
      imageWidth: 335
    }
  }

  onLayout = (event) => {
    const width = event.nativeEvent.layout.width

    this.setState({
      imageWidth: width
    })
  }

  renderContent () {
    const {
      type,
      title,
      duration,
      isCurrentDay,
      isActive,
      start,
      end
    } = this.props

    const containerStyles = [
      styles.container,
      isCurrentDay && styles.currentDay,
      isActive && styles.active
    ]

    const background = type
    const timeframe = duration <= 60 ? `${duration} Minutes` : `${format(getTime(start), 'h:mm')} - ${format(getTime(end), 'h:mma')}`
    const cellTitle = title || `${type.charAt(0).toUpperCase() + type.slice(1)} Break`

    const imageWidth = this.state.imageWidth

    return (
      <View>
        <View style={containerStyles} onLayout={this.onLayout}>
          <Image source={background} style={[styles.background, {width: imageWidth}]} />
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <Text style={styles.heading}>
                {cellTitle}
              </Text>
              <Text style={styles.duration}>
                {timeframe}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  renderWrapper () {
    if (this.props.onPress) {
      return (
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          {this.renderContent()}
        </TouchableWithoutFeedback>
      )
    } else {
      return this.renderContent()
    }
  }

  render () {
    const { currentTime, duration, start, isActive } = this.props

    return (
      <View>
        {this.renderWrapper()}
      </View>
    )
  }
}