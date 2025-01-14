import React from "react";
import {
  FlatList,
  SectionList,
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";

const App = () => {
  // Dữ liệu sản phẩm (bài 1)
  const products = [
    { id: "1", name: "Product A", price: "10.00" },
    { id: "2", name: "Product B", price: "15.00" },
    { id: "3", name: "Product C", price: "20.00" },
  ];

  // Dữ liệu nhóm sản phẩm (bài 2)
  const groupedProducts = [
    { title: "Category A", data: ["Product A1", "Product A2", "Product A3"] },
    { title: "Category B", data: ["Product B1", "Product B2"] },
    { title: "Category C", data: ["Product C1", "Product C2", "Product C3"] },
  ];

  // Hàm xử lý khi bấm vào sản phẩm (áp dụng cho cả hai bài)
  const handlePress = (product) => {
    Alert.alert("Thông báo", `Bạn đã chọn sản phẩm: ${product}`);
  };

  // Render từng sản phẩm (bài 1 - FlatList)
  const renderFlatListItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handlePress(item.name)}
      style={styles.itemContainer}
    >
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.priceText}>${item.price}</Text>
    </TouchableOpacity>
  );

  // Render từng sản phẩm (bài 2 - SectionList)
  const renderSectionItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handlePress(item)}
      style={styles.itemContainer}
    >
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  // Render tiêu đề nhóm (bài 2 - SectionList)
  const renderSectionHeader = ({ section }) => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{section.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Danh sách sản phẩm (FlatList)</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={renderFlatListItem}
          style={styles.listContainer}
        />
        <Text style={styles.title}>Danh sách nhóm sản phẩm (SectionList)</Text>
        <SectionList
          sections={groupedProducts}
          keyExtractor={(item, index) => item + index}
          renderItem={renderSectionItem}
          renderSectionHeader={renderSectionHeader}
          style={styles.listContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
  },
  listContainer: {
    marginBottom: 20,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 4,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  itemText: {
    fontSize: 16,
    color: "#666",
  },
  priceText: {
    fontSize: 14,
    color: "#999",
  },
  headerContainer: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 4,
    marginVertical: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default App;
