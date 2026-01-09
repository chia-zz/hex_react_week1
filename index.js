const { useState } = React;

function App() {
  const [tempProduct, setTempProduct] = useState(null);
  const [products, setProducts] = useState([
    {
      category: "甜甜圈",
      content: "尺寸：14x14cm",
      description:
        "濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！",
      id: "-L9tH8jxVb2Ka_DYPwng",
      is_enabled: 1,
      origin_price: 150,
      price: 99,
      title: "草莓莓果夾心圈",
      unit: "元",
      num: 10,
      imageUrl: "https://images.unsplash.com/photo-1583182332473-b31ba08929c8",
      imagesUrl: [
        "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a",
        "https://images.unsplash.com/photo-1559656914-a30970c1affd",
      ],
    },
    {
      category: "蛋糕",
      content: "尺寸：6寸",
      description:
        "蜜蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！",
      id: "-McJ-VvcwfN1_Ye_NtVA",
      is_enabled: 1,
      origin_price: 1000,
      price: 900,
      title: "蜂蜜檸檬蛋糕",
      unit: "個",
      num: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
      imagesUrl: [
        "https://images.unsplash.com/photo-1618888007540-2bdead974bbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
      ],
    },
    {
      category: "蛋糕",
      content: "尺寸：6寸",
      description: "法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。",
      id: "-McJ-VyqaFlLzUMmpPpm",
      is_enabled: 1,
      origin_price: 700,
      price: 600,
      title: "暗黑千層",
      unit: "個",
      num: 15,
      imageUrl:
        "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      imagesUrl: [
        "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      ],
    },
  ]);
  const modalDetail = (product) => {
    setTempProduct(product);
    const modal = new bootstrap.Modal(document.getElementById("productDetail"));
    modal.show();
  };
  return (
    <div className="container my-3">
      <div className="row my-2">
        <div className="offset-2 col-md-8">
          <h2 className="shadow-title">產品列表</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">產品名稱</th>
                <th scope="col">原價</th>
                <th scope="col">售價</th>
                <th scope="col">是否啟用</th>
                <th scope="col">細節</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.title}</th>
                  <td>{item.origin_price}</td>
                  <td>{item.price}</td>
                  <td>{item.is_enabled ? "有啟用" : "未啟用"}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => modalDetail(item)}
                    >
                      點我查看
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {tempProduct && (
          <div className="modal fade" id="productDetail" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-dark">
                  <h5 className="modal-title text-light">產品明細</h5>
                </div>
                <div className="modal-body">
                  <img
                    src={tempProduct.imageUrl}
                    className="img-fluid mb-3 rounded-3"
                    alt={tempProduct.title}
                  />
                  <h6 className="fs-2 fw-bold">
                    {tempProduct.title}
                    <span className="fs-6 badge bg-dark ms-2 fw-medium">
                      {tempProduct.category}
                    </span>
                  </h6>
                  <p>產品{tempProduct.content}</p>
                  <p>產品描述:{tempProduct.description}</p>
                  <p>
                    產品售價:
                    <del className="mx-1 text-muted">
                      {tempProduct.origin_price}
                    </del>
                    /
                    <span className="fw-bold mx-1 text-success">
                      {tempProduct.price}
                    </span>
                  </p>

                  <div className="imagesUrl">
                    {tempProduct.imagesUrl.map((url, index) => (
                      <img
                        key={index}
                        src={url}
                        className="rounded-3"
                        alt={`${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    關閉
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
