package main

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

type Msg struct {
	Message string `json:"message"`
}

func main() {
	gin.SetMode(gin.ReleaseMode)

	router := gin.Default()
	router.GET("/", handler)

	fmt.Println("Go REST service started...")
	router.Run("0.0.0.0:3000")
}

func handler(ctx *gin.Context) {
	name := ctx.DefaultQuery("name", "World")
	msg := Msg{
		Message: fmt.Sprintf("Hello %s!", strings.TrimSpace(name)),
	}

	ctx.JSON(http.StatusOK, msg)
}
