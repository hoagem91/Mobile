### So sánh FlatList và SectionList

1. **Mục đích sử dụng**:  
   - **FlatList**: Dùng để hiển thị danh sách phẳng, không phân nhóm.  
     Ví dụ: Danh sách sản phẩm, danh sách bài viết, danh bạ đơn giản.  
   - **SectionList**: Dùng để hiển thị danh sách có cấu trúc phân nhóm.  
     Ví dụ: Danh mục sản phẩm theo loại, lịch trình sự kiện theo ngày.  

2. **Cấu trúc dữ liệu**:  
   - **FlatList**: Cần một mảng dữ liệu đơn giản, ví dụ:  
     `[ 'Item 1', 'Item 2', 'Item 3' ]`  
   - **SectionList**: Cần một mảng các đối tượng có cấu trúc `title` và `data`, ví dụ:  
     ```javascript
     [
       { title: 'Group 1', data: ['Item 1', 'Item 2'] },
       { title: 'Group 2', data: ['Item 3', 'Item 4'] }
     ]
     ```

3. **Hiệu năng**:  
   - **FlatList**: Tốt hơn khi làm việc với danh sách phẳng, đặc biệt khi có số lượng lớn (vài nghìn mục).  
   - **SectionList**: Hiệu năng giảm khi dữ liệu lớn, do cần xử lý tiêu đề và nhóm cho từng mục.  

4. **Tính dễ sử dụng**:  
   - **FlatList**: Dễ sử dụng hơn vì chỉ cần mảng dữ liệu và hàm `renderItem`.  
   - **SectionList**: Phức tạp hơn vì cần xử lý thêm `renderSectionHeader` để hiển thị tiêu đề nhóm.  

---

### Khi nào nên dùng:
- **FlatList**: Khi hiển thị danh sách đơn giản, không cần phân nhóm.  
- **SectionList**: Khi dữ liệu có cấu trúc phân nhóm rõ ràng và cần hiển thị tiêu đề nhóm.  
