import React from "react";
import { View, Image, Pressable, Text } from "react-native";

import { Ionicons, FontAwesome } from "@expo/vector-icons";

import {
  postImage,
  postLabel,
  commentsWrapper,
  locationLabel,
  locationWrapper,
  commentsInner,
  metaWrapper,
  commentsLabel,
  postItem,
} from "./PostItemSimple.styles";

const PostItemSimple = ({ data }) => {
  const { title, image, location, comments } = data;
  const { country, region } = location;
  const locationInfo = `${region}, ${country}`;

  return (
    <View style={postItem}>
      <Image source={image} style={postImage} />
      <Text style={postLabel}>{title}</Text>
      <View style={metaWrapper}>
        <View style={commentsInner}>
          <View style={commentsWrapper}>
            <Pressable>
              <FontAwesome name="comment-o" size={18} color="#BDBDBD" />
            </Pressable>
            <Text style={commentsLabel}>{comments}</Text>
          </View>
        </View>
        <View style={locationWrapper}>
          <Ionicons name="location-outline" size={18} color="#BDBDBD" />
          <Text style={locationLabel}>{locationInfo}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostItemSimple;