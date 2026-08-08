import { useMemo, useState } from "react";
import {
  MdAdd,
  MdAnalytics,
  MdInventory2,
  MdRemove,
  MdSearch,
  MdTrendingUp,
  MdWarningAmber,
} from "react-icons/md";
import "./styles/DataWorkspace.css";

type InventoryItem = {
  id: string;
  name: string;
  category: string;
  stock: number;
  reorderAt: number;
  price: number;
};

const salesData = [
  { month: "Jan", value: 54 },
  { month: "Feb", value: 68 },
  { month: "Mar", value: 62 },
  { month: "Apr", value: 79 },
  { month: "May", value: 73 },
  { month: "Jun", value: 92 },
];

const channelData = [
  { label: "Mobile", value: 44 },
  { label: "Web", value: 31 },
  { label: "Branch", value: 17 },
  { label: "Partner", value: 8 },
];

const initialInventory: InventoryItem[] = [
  { id: "INV-1042", name: "Wireless Scanner", category: "Hardware", stock: 42, reorderAt: 15, price: 189 },
  { id: "INV-1043", name: "Thermal Labels", category: "Supplies", stock: 8, reorderAt: 20, price: 24 },
  { id: "INV-1044", name: "POS Terminal", category: "Hardware", stock: 16, reorderAt: 10, price: 649 },
  { id: "INV-1045", name: "Packing Tape", category: "Supplies", stock: 0, reorderAt: 25, price: 12 },
  { id: "INV-1046", name: "Inventory Tablet", category: "Electronics", stock: 27, reorderAt: 8, price: 419 },
  { id: "INV-1047", name: "RFID Tags", category: "Electronics", stock: 134, reorderAt: 50, price: 4 },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const DataWorkspace = () => {
  const [activeView, setActiveView] = useState<"dashboard" | "inventory">("dashboard");
  const [period, setPeriod] = useState("6 months");
  const [inventory, setInventory] = useState(initialInventory);
  const [query, setQuery] = useState("");
  const [stockFilter, setStockFilter] = useState("All stock");

  const visibleInventory = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return inventory.filter((item) => {
      const matchesQuery =
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.id.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery);
      const matchesStock =
        stockFilter === "All stock" ||
        (stockFilter === "Low stock" && item.stock > 0 && item.stock <= item.reorderAt) ||
        (stockFilter === "Out of stock" && item.stock === 0) ||
        (stockFilter === "Healthy" && item.stock > item.reorderAt);
      return matchesQuery && matchesStock;
    });
  }, [inventory, query, stockFilter]);

  const inventoryValue = inventory.reduce(
    (total, item) => total + item.stock * item.price,
    0
  );
  const lowStockCount = inventory.filter(
    (item) => item.stock <= item.reorderAt
  ).length;

  const updateStock = (id: string, change: number) => {
    setInventory((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, stock: Math.max(0, item.stock + change) }
          : item
      )
    );
  };

  return (
    <section className="data-workspace section-container" id="data-hub">
      <div className="data-workspace-heading">
        <div>
          <span className="data-eyebrow">Interactive case study</span>
          <h2>
            Data <span>Hub</span>
          </h2>
        </div>
        <p>
          A working analytics and inventory experience that demonstrates how I
          translate operational data into decisions.
        </p>
      </div>

      <div className="workspace-shell">
        <div className="workspace-tabs" role="tablist" aria-label="Data Hub views">
          <button
            type="button"
            role="tab"
            aria-selected={activeView === "dashboard"}
            className={activeView === "dashboard" ? "workspace-tab active" : "workspace-tab"}
            onClick={() => setActiveView("dashboard")}
            data-cursor="disable"
          >
            <MdAnalytics /> Analytics Dashboard
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeView === "inventory"}
            className={activeView === "inventory" ? "workspace-tab active" : "workspace-tab"}
            onClick={() => setActiveView("inventory")}
            data-cursor="disable"
          >
            <MdInventory2 /> Inventory Management
          </button>
        </div>

        {activeView === "dashboard" ? (
          <div className="workspace-view" role="tabpanel">
            <div className="workspace-toolbar">
              <div>
                <span className="workspace-label">Portfolio performance</span>
                <h3>Executive overview</h3>
              </div>
              <label>
                <span>Reporting period</span>
                <select value={period} onChange={(event) => setPeriod(event.target.value)}>
                  <option>30 days</option>
                  <option>3 months</option>
                  <option>6 months</option>
                  <option>12 months</option>
                </select>
              </label>
            </div>

            <div className="metric-grid">
              <article className="metric-card">
                <span>Revenue</span>
                <strong>₹42.8L</strong>
                <small className="metric-positive"><MdTrendingUp /> 12.4% vs prior period</small>
              </article>
              <article className="metric-card">
                <span>Transactions</span>
                <strong>128.4K</strong>
                <small className="metric-positive"><MdTrendingUp /> 8.7% vs prior period</small>
              </article>
              <article className="metric-card">
                <span>Conversion rate</span>
                <strong>7.8%</strong>
                <small className="metric-positive"><MdTrendingUp /> 1.3 percentage points</small>
              </article>
              <article className="metric-card">
                <span>Quality score</span>
                <strong>99.2%</strong>
                <small>1.1M records validated</small>
              </article>
            </div>

            <div className="dashboard-grid">
              <article className="data-card trend-card">
                <div className="card-title-row">
                  <div>
                    <span className="workspace-label">Monthly trend</span>
                    <h4>Transaction growth</h4>
                  </div>
                  <span className="period-badge">{period}</span>
                </div>
                <div className="bar-chart" aria-label="Monthly transaction growth chart">
                  {salesData.map((item) => (
                    <div className="bar-column" key={item.month}>
                      <span className="bar-value">{item.value}K</span>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ height: `${item.value}%` }} />
                      </div>
                      <span>{item.month}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="data-card channel-card">
                <span className="workspace-label">Channel mix</span>
                <h4>Transaction share</h4>
                <div className="channel-list">
                  {channelData.map((channel) => (
                    <div className="channel-row" key={channel.label}>
                      <div><span>{channel.label}</span><strong>{channel.value}%</strong></div>
                      <div className="channel-track"><span style={{ width: `${channel.value}%` }} /></div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        ) : (
          <div className="workspace-view" role="tabpanel">
            <div className="workspace-toolbar inventory-toolbar">
              <div>
                <span className="workspace-label">Live stock control</span>
                <h3>Inventory overview</h3>
              </div>
              <div className="inventory-controls">
                <label className="inventory-search">
                  <MdSearch />
                  <span className="sr-only">Search inventory</span>
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search product, SKU or category"
                  />
                </label>
                <label>
                  <span className="sr-only">Filter by stock status</span>
                  <select value={stockFilter} onChange={(event) => setStockFilter(event.target.value)}>
                    <option>All stock</option>
                    <option>Healthy</option>
                    <option>Low stock</option>
                    <option>Out of stock</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="inventory-summary">
              <article><span>Total SKUs</span><strong>{inventory.length}</strong></article>
              <article><span>Inventory value</span><strong>{formatCurrency(inventoryValue)}</strong></article>
              <article className="summary-warning"><span>Needs attention</span><strong><MdWarningAmber /> {lowStockCount}</strong></article>
            </div>

            <div className="inventory-table-wrap">
              <table className="inventory-table">
                <thead>
                  <tr><th>Product</th><th>Category</th><th>Status</th><th>Unit price</th><th>Stock</th></tr>
                </thead>
                <tbody>
                  {visibleInventory.map((item) => {
                    const status = item.stock === 0 ? "Out" : item.stock <= item.reorderAt ? "Low" : "Healthy";
                    return (
                      <tr key={item.id}>
                        <td><strong>{item.name}</strong><span>{item.id}</span></td>
                        <td>{item.category}</td>
                        <td><span className={`stock-status ${status.toLowerCase()}`}>{status}</span></td>
                        <td>{formatCurrency(item.price)}</td>
                        <td>
                          <div className="stock-control">
                            <button type="button" onClick={() => updateStock(item.id, -1)} aria-label={`Reduce ${item.name} stock`}><MdRemove /></button>
                            <strong>{item.stock}</strong>
                            <button type="button" onClick={() => updateStock(item.id, 1)} aria-label={`Increase ${item.name} stock`}><MdAdd /></button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {visibleInventory.length === 0 ? (
                <p className="empty-inventory">No inventory items match your filters.</p>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DataWorkspace;
