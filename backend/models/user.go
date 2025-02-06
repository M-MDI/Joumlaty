package models

type User struct {
	ID       string
	Username string
	Password string
	Role     string // "seller" or "buyer"
}

type Product struct {
	ID          string
	Name        string
	Price       float64
	Description string
	SellerID    string
}

type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Role     string `json:"role"`
}