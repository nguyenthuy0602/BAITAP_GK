const food = [
  {
    id: 1,
    name: "Bò sốt vang",
    image: "https://i-giadinh.vnecdn.net/2021/12/10/Buoc-5-9470-1639110897.jpg",
    price: "150.000",
    madeIn: "Việt Nam",
  },
  {
    id: 2,
    name: "Bò Mỹ nướng mắm nhỉ",
    image:
      "https://job3s.vn/pictures/images_02_2024/bo-nuong-mam-nhi-5.png",
    price: "350.000",
    madeIn: "Mỹ",
  },
  {
    id: 3,
    name: "Cơm tấm",
    image:
      "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/com_tam_bao_nhieu_calo_giam_can_an_com_tam_duoc_khong1_444305f50c.jpg",
    price: "45.000",
    madeIn: "Việt Nam",
  },
  {
    id: 4,
    name: "Bún Bò Huế",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Bun-Bo-Hue-from-Huong-Giang-2011.jpg/800px-Bun-Bo-Hue-from-Huong-Giang-2011.jpg",
    price: "45.000",
    madeIn: "Việt Nam",
  },
  {
    id: 5,
    name: "Mỳ Ý",
    image:"https://www.cet.edu.vn/wp-content/uploads/2021/03/cach-lam-mi-y.jpg",
    price: "70.000",
    madeIn: "Đảo Sicily (Ý)",
  },

];

function showFood() {
  var html = "";
  var d = 0;
  for (var i = 0; i < food.length; i++) {
    d++;
    html + "<tr>";
    html += "<td>" + d + "</td>";
    html += "<input type='hidden' value='" + i + "' id='editIndex'>";
    html += "<td>" + food[i].name + "</td>";
    html +=
      "<td><img src=" + food[i].image + " style=height:100px;width:100px></td>";
    html += "<td>" + food[i].madeIn + "</td>";
    html += "<td>" + food[i].price + "</td>";
    html +=
      "<td><input type='button' value='Sửa' onclick='editFood(" +
      i +
      ")' /> <input type='button' value='Xoá' onclick='deleteFood(" +
      i +
      ")' /></td>";
    html += "</tr>";
  }
  document.getElementById("tbl").innerHTML = html;
}

function createFood() {
  var n = food.length;
  n++;
  var foodName = document.getElementById("foodName").value;
  var foodImage = document.getElementById("foodImage").value;
  var foodPrice = document.getElementById("foodPrice").value;
  var foodMadeIn = document.getElementById("foodMadeIn").value;

  var newFood = {
    id: n,
    name: foodName,
    image: foodImage,
    price: foodPrice,
    madeIn: foodMadeIn,
  };
  food.push(newFood);
  showFood();
}

function deleteContent() {
  document.getElementById("foodName").value = "";
  document.getElementById("foodPrice").value = "";
  document.getElementById("foodMadeIn").value = "";
  document.getElementById("foodImage").value = "";
}

function editFood(index) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("editForm").style.display = "block";

  document.getElementById("editIndex").value = index;
  document.getElementById("editFoodName").value = food[index].name;
  document.getElementById("editFoodImage").value = food[index].image;
  document.getElementById("editFoodMadeIn").value = food[index].madeIn;
  document.getElementById("editFoodPrice").value = food[index].price;

  document.getElementById("editForm").style.display = "block";
}

function closeEditForm() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("editForm").style.display = "none";
}

function updateFood() {
  var indexToUpdate = parseInt(document.getElementById("editIndex").value);
  var newName = document.getElementById("editFoodName").value;
  var newImage = document.getElementById("editFoodImage").value;
  var madeIn = document.getElementById("editFoodMadeIn").value;
  var newPrice = document.getElementById("editFoodPrice").value;

  food[indexToUpdate].name = newName;
  food[indexToUpdate].image = newImage;
  food[indexToUpdate].madeIn = madeIn;
  food[indexToUpdate].price = newPrice;
  document.getElementById("overlay").style.display = "none";
  document.getElementById("editForm").style.display = "none";
  showFood(food);
}

function deleteFood(index) {
  food.splice(index, 1);
  showFood();
}

