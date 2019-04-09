import React, { Component } from 'react'
import { ImageBackground, View } from 'react-native'

// NativeBase Components
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  ScrollView
} from 'native-base'

// Style
import styles from './styles'

// Navigation
import { withNavigation } from 'react-navigation'

class TheItem extends Component {
  handlePress = () => {
    this.props.navigation.navigate('ItemDetail', {
      item: this.props.item
    })
  }

  render () {
    const { item } = this.props
    return (
      <>
        <View style={styles.thumbnail} />
        <ListItem button onPress={this.handlePress} style={styles.listitem}>
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Thumbnail
                  bordered
                  source={{ uri: item.image }}
                  style={styles.thumbnail}
                />
                <Text style={styles.text}>{item.name}</Text>
                <Text note style={styles.text}>
                  {item.price}
                </Text>
              </Left>
            </CardItem>
          </Card>
        </ListItem>
      </>
    )
  }
}

export default withNavigation(TheItem)
